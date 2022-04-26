import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

  const onClick = () => {
    console.log("Clicked")
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd}/>
    </header>
  )
}

//Creating default value for props

Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header
