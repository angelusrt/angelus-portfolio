import { useEffect } from "react"

const transition = {
  isTransition: true,
  timeout: 1000,
  delayPerItem: 200
}

function setAttribute(item, transition){
  item.setAttribute(
    'style', 
    `transition-delay: ${
      transition.start + 
      transition.delayPerItem * 
      transition.index
    }ms`
  ) 
}
function removeAttribute(item, transition){
  const duration = (
    transition.timeout + 
    transition.start + 
    transition.delayPerItem * 
    transition.index
  )

  setTimeout(() => {
    item.removeAttribute('style')
  }, duration)
}

function delayItem(item, transition) {
  setAttribute(item, transition)
  removeAttribute(item, transition)
}
function delayChildren(entry, transition) {
  entry.target.childNodes.forEach((item, index) => {
    delayItem(item, {...transition, index})
  }) 
}
function delay(entry, transition){
  if(transition.isDelayChild)
    delayChildren(entry, transition)
  else
    delayItem(entry.target, transition)
}

function observe (item, className, transition) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isNotAlreadyAnimated = !entry.target.classList.contains(className)

      if(entry.isIntersecting && isNotAlreadyAnimated){
        entry.target.classList.add(className)

        if(transition.isTransition)
          delay(entry, transition)
      } 
      else if(!isNotAlreadyAnimated){
        observer.unobserve(item)
      }
    })}
  )

  observer.observe(item)
}
  
function useAnimateOnScroll(query, transition = {isTransition: false}){
  useEffect(() => {  
    const queryArray = query.split(" ")
    const lastQuery = queryArray[queryArray.length - 1]
    const className = lastQuery.substring(1)
    const classNameToToggle = className + '--show' 
  
    const itemsToAnimate = document.querySelectorAll(query)
    
    itemsToAnimate.forEach(
      (item, index) => observe(item, classNameToToggle, {...transition, index})
    )
    //eslint-disable-next-line
  }, [])
}
  
export {useAnimateOnScroll, transition}