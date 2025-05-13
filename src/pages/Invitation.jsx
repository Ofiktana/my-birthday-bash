import Background from "@/components/inner/Background"
import soccerBgImage from '../../src/assets/soccer-ball.jpg'
import MainArea from "@/components/inner/MainArea"

function Invitation() {
  return (
    <Background image={soccerBgImage}>
      <MainArea />
    </Background>
  )
}

export default Invitation