const RegionLabel = ({ region }) => {
  
  const regionColor = {
      서울: 'yellow', 
      경기도: 'skyblue',
      강원도: 'pink',
      전라도: 'purple',
      충청도: 'green',
      경상도: 'gray'
  }

  return (
      <span
         style={{ 
             backgroundColor : regionColor[`${region}`],
             padding: '.1rem .4rem',
             borderRadius: '4px'
        }}
      >{region}</span>
  )
};

export default RegionLabel;