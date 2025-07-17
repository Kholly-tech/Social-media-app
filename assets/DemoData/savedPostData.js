export const messages = [
    { id: 1, type: 'Personal', pic: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360', name: 'Adeola Adedeyo', message: 'Hi! How are you ?', time: '10:30 AM', hasUnread: true },
    { id: 2, type: 'Personal', pic: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360', name: 'Sarah Jones', message: 'Are you free this evening?', time: '09:45 AM', hasUnread: false },
    { id: 3, type: 'Community', pic: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360', name: 'Adeola Adedeyo', message: 'Hi! How are you ?', time: '09:30 AM', hasUnread: true },
    { id: 4, type: 'Community', pic: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360', name: 'John Doe', message: 'Hi! How are you ?', time: '08:15 AM', hasUnread: true },
    { id: 5, type: 'Personal', pic: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360', name: 'Sarah Jones', message: 'See you at the meeting!', time: '07:45 AM', hasUnread: false },
    { id: 6, type: 'Personal', pic: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360', name: 'Adeola Adedeyo', message: 'See you at the meeting!', time: '07:45 AM', hasUnread: true },
    { id: 7, type: 'Community', pic: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360', name: 'John Doe', message: 'See you at the meeting!', time: '07:45 AM', hasUnread: false },
];

export const events = [{
        id: 1,
        title: 'Call of Duty: 3v3 1ND BEST',
        image: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360',
        time: '2:00 PM',
        date: 'Today'
    },
    {
        id: 2,
        title: 'Cyberbaddies Chill & Drinks',
        image: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360',
        time: '4:00 PM',
        date: 'Tomorrow'
    },
];

// Sample data - replace with actual data
export const posts = Array(24).fill().map((_, index) => ({
    id: index + 1,
    imageUrl: `https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1728047744~exp=1728051344~hmac=4d392573a0165330d407da96e773600d52ed2891c68f80a515c9b401534e6ea2&w=360`,
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: 'Consectetur, Egestas Auctor'
}));

// export const posts = [];