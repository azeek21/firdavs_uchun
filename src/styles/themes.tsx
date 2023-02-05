


const Theme = {
    'light' : {
        bg: {
            primary: 'white',
            secondary: "rgba(0, 0, 0, 0.3)"
        },
        text: {
            primary: 'black',
            secondary: '#00c9ec',
            gray: 'rgba(0, 0, 0, 0.5)'
        }

    },
    'dark' : {
        bg: {
            primary: '#172e33',
            secondary: "rgba(255, 255, 255, 0.3)",
        },
        text: {
            primary: '#b6f6ff',
            secondary: '#00c9ec',
            gray: 'rgba(182, 246, 255, 0.5)',
        }
    }
}



export default Theme

export type Theme_T = typeof Theme['light']