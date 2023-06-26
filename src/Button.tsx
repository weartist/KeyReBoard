export interface Props {
  first?: string
  second?: string
  third?: string
  fourth?: string
}

export enum Sty {
  center = 10,
  between,
  left,
  right,
  leftTop,
  rightTop,
  leftDown,
  rightDown,
}
export interface Pros {
  first: string[]
  keycode?: number
  subcode?: number
  firstStyle?: Sty
  second?: string[]
  secondStyle?: Sty
  classStr?: string[]
  needLine?: boolean
}

function getStyleWith(style: Sty): string {
  let result = ''
  if (style == Sty.center) {
    result = 'magic-center'
  } else if (style == Sty.between) {
    result = 'magic-between'
  } else if (style == Sty.left) {
    result = 'magic-between'
  } else if (style == Sty.right) {
    result = 'magic-right'
  } else if (style == Sty.leftTop) {
    result = 'magic-left-top'
  } else if (style == Sty.leftDown) {
    result = 'magic-left-down'
  } else if (style == Sty.rightTop) {
    result = 'magic-right-top'
  } else if (style == Sty.rightDown) {
    result = 'magic-right-down'
  }
  return result
}

export function Button(pro: Pros) {
  // const seconds = pro.second;

  let className = 'magic-flex '
  if (pro.firstStyle) {
    className += getStyleWith(pro.firstStyle)
  }

  const firsts = pro.first.map(item => (
    <span
      className='magic-key'
      id={item}
      key={item}
    >
      {item}
    </span>
  ))

  const seconds = pro.second
    ? pro.second.map(item => (
        <span
          className='magic-key'
          key={item}
        >
          {item}
        </span>
      ))
    : []

  let secondClassName = 'magic-flex '
  if (pro.secondStyle) {
    secondClassName += getStyleWith(pro.secondStyle)
  }

  let divClass = 'magic'
  if (firsts.length > 0 && seconds.length > 0) {
    divClass += ' magic-column'
    // divClass += " magic-wrap";
  }
  if (pro.firstStyle && pro.firstStyle == Sty.center) {
    divClass += ' magic-center'
  }

  if (pro.firstStyle && (pro.firstStyle == Sty.right || pro.firstStyle == Sty.rightDown)) {
    divClass += ' magic-right'
  }

  if (pro.classStr) {
    for (let index in pro.classStr) {
      divClass += ' '
      divClass += pro.classStr[index]
    }
  }

  let lines = null
  if (pro.needLine) {
    lines = <div className='hr-solid'></div>
  }

  const code = pro.keycode ? pro.keycode.toString() : ''

  return (
    <div
      className={divClass}
      id={code}
    >
      <div className={className}>{firsts}</div>
      {pro.needLine == true && <>{lines}</>}
      {seconds.length > 0 && <div className={secondClassName}>{seconds}</div>}
    </div>
  )
}
