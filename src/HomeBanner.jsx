import ThemeContext from './context/theme.context'

function HomeBanner() {
  return (
    <div>
      <h2>HomeBanner</h2>
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>{value.name}</h2>
        }}
      </ThemeContext.Consumer>
    </div>
  )
}
export default HomeBanner
