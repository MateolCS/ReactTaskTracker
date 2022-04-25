import Button from "./Button"

const Header = ({ title }) => {

  const onClick = () => {
    console.log("Clicked")
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text='Add' color='green' onClick={onClick}/>
    </header>
  )
}

//Creating default value for props

Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header
