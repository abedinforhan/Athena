import React from 'react';
import happy from '../../../Images/happy@2x.png';
import marketing from '../../../Images/marketing@2x.png';
import surface from '../../../Images/surface1@2x.png';
import transportation from '../../../Images/transportation@2x.png';
import './Achievements.css';


const achievements = [
      {
          img: happy,
          textLarge: '700+',
          textSmall: 'Happy Clients',
      },
      {
          img: marketing,
          textLarge: '140+',
          textSmall: 'Projects Completed',
      },
      {
          img: surface,
          textLarge: '25+',
          textSmall: 'Crazy Minds',
      },
      {
          img: transportation,
          textLarge: '75+',
          textSmall: 'Running Projects',
      },
  ];

const Achievements = () => {
      return (
            <section className='achievement py-5'>
            <div className='container py-5'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-md-4'>
                        <h2 className='title'>Our Achievements</h2>
                        <br/>
                        <p className='text-secondary'>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letter.
                        </p>
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            {achievements.map((achievement) => (
                                <div className='col-md-5 p-3 my-2 mx-md-2 mx-5 achievement-card'>
                                    <div className='row align-items-center justify-content-center'>
                                        <div className='col-md-6'>
                                            <img
                                                className='img-fluid d-block ml-auto'
                                                src={achievement.img}
                                                alt=''
                                            />
                                        </div>
                                        <div className='achievement-text col-6'>
                                            <h4>{achievement.textLarge}</h4>
                                            <small>
                                                {achievement.textSmall}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
};

export default Achievements;