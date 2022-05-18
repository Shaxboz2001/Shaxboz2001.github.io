import mp3 from "./../assets/Page Turn.mp3";
const audio = new Audio(mp3);

const playAudio = () => {
  audio.play();
};

export default playAudio;
