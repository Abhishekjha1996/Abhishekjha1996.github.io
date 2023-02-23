
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import("./Github.css");
const Github = () => {

  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 20;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };



  return (
    <div className='githead-div'>
        <h1 className="githead">
          GitHub Statistics & Calender
        </h1>

        
            <div className='calendar'>
                <GitHubCalendar
                    username="Abhishekjha1996"
                    hideColorLegend
                    hideTotalCount
                    blockSize={22}
                    blockMargin={2}
                    width='100%'
                    color="green"
                    fontSize={15}
                />
            </div>


           <div className='stats'>
            {/* <div className='stats1'>
            <img className='img1' src="https://github-readme-stats.vercel.app/api/top-langs?username=Abhishekjha1996&show_icons=true&locale=en&layout=compact" alt="Abhishekjha1996" />
            </div> */}
            <div className='stats2'>
            <img className='img2' id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com/?user=Abhishekjha1996&show" alt="Abhishekjha1996" />
            </div>
            <div className='stats3'>
            <img  className='img3' src="https://github-readme-stats.vercel.app/api?username=Abhishekjha1996&show_icons=true&locale=en" alt="Abhishekjha1996" />
            </div>
            </div>

            <div>
            <div className='calendar'>
            <img
        alt=""
        align="center"
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Abhishekjha1996&theme=github_dark"
      />
            </div>

            <div  className='calendar'>
            <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=Abhishekjha1996&show_icons=true&locale=en&layout=compact" alt="Abhishekjha1996" />
            </div>

            <div className='calendar'>
            <img src="https://github-profile-trophy.vercel.app/?username=Abhishekjha1996&theme=radical&no-frame=false&no-bg=false&margin-w=2" width="100%" alt='Abhi'/>
            </div>




            
            </div>

                       
        </div>



  
  )
}

export default Github