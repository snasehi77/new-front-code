import React from 'react';

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
  publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const item = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
  has been the industry's.`;


export const terms = {
  Title: 'PRIVACY POLICY',
  description: `${lorem}`,
  points: [
    {
      title: 'Compliance with Law 1581 of 2012, Colombia',
      description: `${lorem}`
    },
    {
      title: 'The EU-US Privacy Shield Principles',
      description: `${lorem}`
    },
    {
      description: `${lorem}`
    },
    {
      title: 'WHAT WE COLLECT',
      description: `${lorem}`
    },
    {
      title: 'MOBILE DEVICES',
      description: `${lorem}`
    },
    {
      title: 'LOCATION INFORMATION',
      description: `${lorem}`
    },
    {
      title: 'USE OF PERSONAL INFORMATION',
      description: `${lorem}`,
      subPoints: [
        {item: `${item}`},
        {item: `${item}`},
        {item: `${item}`},
      ]
    },
    {
      title: 'SHARING OF PERSONAL INFORMATION',
      description: `${lorem}`,
      subPoints: [
        {item: `${item}`},
        {item: `${item}`},
        {
          item: `${item}`,
          subItems: [
            {subItem: `${item}`},
            {subItem: `${item}`},
            {subItem: `${item}`},
            {subItem: `${item}`},
          ]
        },
        {item: `${item}`},
      ]
    },
    {
      title: 'AUTHORIZATION OF THE HOLDER',
      description: `${lorem}`
    },
    {
      description: `${lorem}`,
      subPoints: [
        {item: `${item}`},
        {item: `${item}`},
        {item: `${item}`},
        {item: `${item}`},
      ]
    },
    {
      title: 'PAYMENTS',
      description: `${lorem}`
    },
    {
      title: 'SECURITY',
      description: `${lorem}`
    },
    {
      title: `INFORMATION CHOICES AND CHANGES`,
      description: `${lorem}`
    },
    {
      title: 'CONTACT INFORMATION',
      description: `${lorem}`
    }
  ]
};