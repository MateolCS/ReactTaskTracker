import Button from "./Button"

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text='Add' color='green'/>
    </header>
  )
}

//Creating default value for props

Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header
