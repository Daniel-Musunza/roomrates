import React from 'react';
import { Container, Paper, Text, Title, Image, Button, Group } from '@mantine/core';

const Rooms = () => {
  return (
    <Container size="lg" style={{ marginTop: 20 }}>
      <Title order={1}>Rooms & Rates</Title>
      <Text size="md">69 rooms, 219 rates</Text>
      <Paper shadow="xs" radius="lg">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ display: 'flex', marginRight: 10 }}>
            <Image
              src="https://www.itravelholidays.co.uk/_next/image?url=https%3A%2F%2Fi.travelapi.com%2Flodging%2F2000000%2F1320000%2F1311900%2F1311827%2F52d3ca50_z.jpg&w=1920&q=75"
              alt="Room"
              width={250}
              height={150}
              style={{ borderRadius: 5, marginRight: 10 }}
            />
            <Button variant="light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.685)', color: 'white' }}>
              <span style={{ paddingRight: 10 }}>6</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
              </svg>
            </Button>
          </div>
          <div>
            <Text size="lg">Atlantis, The Palm</Text>
            <Title order={3}>Room, 1 King Bed (Ocean)</Title>
            <div>
              <Text size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square icon" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                </svg>
                45 sq m
              </Text>
              <Text size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill icon" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
                Sleeps 3
              </Text>
              <Text size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-segmented-nav icon" viewBox="0 0 16 16">
                  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 3h4V5H6zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1"/>
                </svg>
                1 King Bed
              </Text>
            </div>
            <a href="#" style={{ color: 'rgb(16, 110, 224)' }}>More room details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right icon" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg></a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="light" size="xl" style={{ borderRadius: '50%', padding: '0 20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up icon" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
          </Button>
        </div>
      </Paper>
      <div style={{ marginTop: 20 }}>
        {/* Your table-like structure goes here */}
        {/* Replace Table, TableCell, and TableRow with appropriate Mantine components */}
        {/* Refer to Mantine documentation for available components */}
      </div>
      <Text style={{ color: 'rgb(16, 110, 224)', textAlign: 'right' }}>5 more rates for this room <span> <svg
        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
      </svg></span></Text>
    </Container>
  );
};

export default Rooms;
