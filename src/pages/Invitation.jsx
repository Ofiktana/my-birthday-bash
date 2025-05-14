import Background from "@/components/inner/Background"
import soccerBgImage from '../../src/assets/football.jpeg'
import MainArea from "@/components/inner/MainArea"

function Invitation() {
  return (
    <Background image={soccerBgImage}>
      <MainArea />
    </Background>
  )
}

export default Invitation