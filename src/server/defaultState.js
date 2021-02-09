import md5 from 'md5';
export const defaultState = {
    users: [{
        id: "U1",
        username: "admin",
        passwordHash: md5("123"),
        email: "admin@admin.com",
        dob: "01/01/1900",
        favorite: [{
            videoID: "9bZkp7q19f0"
        }]
    }]
}