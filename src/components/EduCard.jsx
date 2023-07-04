import React from 'react';
import Tilty from 'react-tilty';

const EduCard = () => {
  const professions = [
    {
      title: 'Islamic Teacher',
      description:
        'Educating students on the teachings of the Quran, Hadith, and Islamic principles.',
    },
    {
      title: 'Imam of a Mosque',
      description:
        'Leading congregational prayers, delivering sermons, and providing spiritual guidance.',
    },
    {
      title: 'Teacher of a Kindergarten',
      description:
        'Nurturing young minds, introducing basic Islamic concepts, and fostering love for Islam.',
    },
    {
      title: 'Community Outreach',
      description:
        'Engaging with the community, organizing events, and offering support and guidance.',
    },
  ];

  return (
    <div className="my-10">
      {' '}
      <h1 className="heading">Professions</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2  mt-10">
        {professions.map((profession, index) => (
          <div key={index} className="about-description">
            <h2 className="text-xl tg  mb-4">{profession.title}</h2>
            <p className="text-gray-300">{profession.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduCard;
