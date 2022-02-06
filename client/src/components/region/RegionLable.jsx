const RegionLabel = ({ region }) => {
  
  const regionColor = {
      서울: '#D9D7F1', 
      경기도: '#FFFDDE',
      강원도: '#E7FBBE',
      전라도: '#FFCBCB',
      충청도: '#FFEDDB',
      경상도: '#D6E5FA'
  }

  return (
      <span
         style={{ 
             backgroundColor : regionColor[`${region}`],
             padding: '.1rem .3rem',
             borderRadius: '4px',
             marginRight: '.2rem'
        }}
      >{region}</span>
  )
};

export default RegionLabel;