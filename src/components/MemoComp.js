import React from 'react'

function MemoComp({name}) {
console.log('rendering memoComp')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
