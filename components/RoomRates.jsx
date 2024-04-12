import React, {useState} from 'react';
import { Collapse } from '@mantine/core';

const RoomRates = () => {
  const [openedRooms, setOpenedRooms] = useState([]);

  // Function to toggle the collapse for a specific room
  const toggleRoom = (index) => {
    if (openedRooms.includes(index)) {
      setOpenedRooms(openedRooms.filter((item) => item !== index));
    } else {
      setOpenedRooms([...openedRooms, index]);
    }
  };

  const rooms = [
    {
      images : [
        'https://www.itravelholidays.co.uk/_next/image?url=https%3A%2F%2Fi.travelapi.com%2Flodging%2F2000000%2F1320000%2F1311900%2F1311827%2F52d3ca50_z.jpg&w=1920&q=75',
        'https://www.itravelholidays.co.uk/_next/image?url=https%3A%2F%2Fi.travelapi.com%2Flodging%2F2000000%2F1320000%2F1311900%2F1311827%2Ff5a92811_z.jpg&w=1920&q=75'
      ],
      hotel_name: "Atlantis, The Palm",
      offer_room_type: "Room, 1 King Bed (Ocean)",
      rates: [
        {
          package_rate: "Package rate",
          refundable: false,
          extras: [
            "Free valet parking"
          ],
          price: 352,
          total: 2457
        },
        {
          package_rate: "Package rate",
          refundable: true,
          extras: [
            "Bead and Breakfast"
          ],
          price: 567,
          total: 3857
        }
      ],
      space: "50",
      occupants: 4,
      bedType: "1 King Bed"
    },
    {
      images : [
        'https://www.itravelholidays.co.uk/_next/image?url=https%3A%2F%2Fi.travelapi.com%2Flodging%2F3000000%2F2930000%2F2928600%2F2928555%2Fb5c4b784_z.jpg&w=1920&q=75'
      ],
      hotel_name: "Grand Hyatt",
      offer_room_type: "Deluxe Room",
      rates: [
        {
          package_rate: "Standard rate",
          refundable: true,
          extras: [
            "Wi-Fi included",
            "Free breakfast"
          ],
          price: 200,
          total: 1500
        },
        {
          package_rate: "Special rate",
          refundable: false,
          extras: [
            "Airport shuttle",
            "Gym access"
          ],
          price: 300,
          total: 2000
        }
      ],
      space: "40",
      occupants: 2,
      bedType: "Queen Bed"
     
    },
    {
      images : [
        'https://www.itravelholidays.co.uk/_next/image?url=https%3A%2F%2Fi.travelapi.com%2Flodging%2F2000000%2F1890000%2F1883400%2F1883382%2Fa369cfd5_z.jpg&w=1920&q=75',
        'https://www.itravelholidays.co.uk/_next/image?url=https%3A%2F%2Fi.travelapi.com%2Flodging%2F9000000%2F8050000%2F8046700%2F8046669%2F79d34f13_z.jpg&w=1920&q=75',
        'https://www.itravelholidays.co.uk/_next/image?url=https%3A%2F%2Fi.travelapi.com%2Flodging%2F2000000%2F1890000%2F1883400%2F1883382%2Fa369cfd5_z.jpg&w=1920&q=75'
      ],
      hotel_name: "Hilton Hotel",
      offer_room_type: "Suite",
      rates: [
        {
          package_rate: "Suite rate",
          refundable: true,
          extras: [
            "City view",
            "Free minibar"
          ],
          price: 400,
          total: 3000
        }
      ],
      space: "70",
      occupants: 6,
      bedType:"2 King Beds"
     
    },
    // Add more rooms here...
  ];
  
  const totalRooms = rooms.length;
  const totalRates = rooms.reduce((total, room) => total + room.rates.length, 0);

  return (
    <div className="container">
      <h2>Rooms & Rates</h2>
      <h4>{totalRooms} rooms, {totalRates} rates</h4>
      <div className="rooms">
      {rooms.map((room, index) => (
        <div className="rates-container"  key={index}>
          <div className="card1-container">
            <div className="card1">
              <div className="image-container">
                <img src={room.images[0]}
                  alt="" />
                <button className="img-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  <path
                    d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
                </svg> <span>{room.images.length}</span></button>
              </div>
              <div className="card-details">
                <p>{room.hotel_name}</p>
                <h3>{room.offer_room_type}</h3>
                <p>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3891b7" className="bi bi-square" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    </svg> {room.space} sq m
                  </span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3891b7" className="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg> Sleeps {room.occupants} people
                  </span>

                  <span><svg width="16" height="16"  style={{marginRight: '5px'}} focusable="false" data-prefix="fas" data-icon="bed" className="svg-inline--fa fa-bed " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#3891b7" d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"></path></svg> 
                  {room.bedType}
                  </span>
                </p>
                <a href="">More room details<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3891b7" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg></a>

              </div>
            </div>
            <div className="up-button">
                  <button onClick={() => toggleRoom(index)} className="up">
                    {openedRooms.includes(index) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                      </svg>
                    )}
                  </button>
                </div>
          </div>
          <Collapse in={openedRooms.includes(index)}>
            <div>
              <table>
                <tbody>
                  {room.rates.map((rate, i) => (
                    <tr key={i}>
                      <td>
                        <span className="i-circle-icon">i</span>
                        {rate.package_rate}<br />
                        <span style={{ marginLeft: '20px' }}>{rate.refundable ? "Refundable" : "Non-refundable"}</span>
                      </td>
                      <td>
                      {rate.extras.slice(0,2).map((extra, j) => (
                              <span key={j} className="green-text">{extra}<br /></span>
                            ))}
                       
                        <span className="blue-text">More extras</span>
                      </td>
                      <td >
                        <span style={{ marginLeft: '100px' }}>&euro; {rate.price}</span><br />
                        <span>Total <b className="larger-font">&euro; {rate.total}</b></span><br />
                        <p style={{ marginLeft: '25px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-chevron-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg> <span className="price-details">Price details</span></p>

                      </td>
                      <td style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', marginRight: 0, alignItems: 'flex-end' }}>
                        <button>
                          <span className="span-mother">
                            <span>R</span>
                            <span>e</span>
                            <span>s</span>
                            <span>e</span>
                            <span>r</span>
                            <span>v</span>
                            <span>e</span>
                          </span>
                          <span className="span-mother2">
                            <span>R</span>
                            <span>e</span>
                            <span>s</span>
                            <span>e</span>
                            <span>r</span>
                            <span>v</span>
                            <span>e</span>
                          </span>
                        </button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="rate-cards">
              {room.rates.map((rate, i) => (
                <div className="rate-card" key={i}>
                  <div className="rate-card-p1">
                    <div>
                      <span className="i-circle-icon">i</span>
                      {rate.package_rate}<br />
                      <span style={{ marginLeft: '20px' }}>{rate.refundable ? "Refundable" : "Non-refundable"}</span>
                    </div>
                    <div>
                    {rate.extras.map((extra, j) => (
                              <span key={j} className="green-text">{extra}<br /></span>
                            ))}
                    
                      <span className="blue-text">More extras</span>
                    </div>
                  </div>
                  <div className="rate-card-p1">
                    <div>
                      <span style={{ marginLeft: '100px' }}>&euro; {rate.price}</span><br />
                      <span>Total <b className="larger-font">&euro; {rate.total}</b></span><br />
                    </div>
                    <p style={{ marginLeft: '25px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg> <span className="price-details">Price details</span></p>

                  </div>
                  <div className="rate-card-p1">
                    <button>
                      <span className="span-mother">
                        <span>R</span>
                        <span>e</span>
                        <span>s</span>
                        <span>e</span>
                        <span>r</span>
                        <span>v</span>
                        <span>e</span>
                      </span>
                      <span className="span-mother2">
                        <span>R</span>
                        <span>e</span>
                        <span>s</span>
                        <span>e</span>
                        <span>r</span>
                        <span>v</span>
                        <span>e</span>
                      </span>
                    </button>
                   
                  </div>
                </div>
              ))}
              </div>
            </div>
            <p style={{ color: 'rgb(16, 110, 224)', textAlign: 'right', marginRight: '20px', cursor: 'pointer' }}>5 more rates for this room <span> <svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg></span></p>
          </Collapse>

        </div>
      ))}
      </div>
    </div>
  );
};

export default RoomRates;
