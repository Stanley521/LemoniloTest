export let maleGuid = '97134e95-55bb-4f6b-a415-d5f36558db20';
export let femaleGuid = 'a897a4ce-1145-4591-917a-304c997c6f59';

export let mrsGuid = 'ba64ac7f-d5b0-4ade-b241-4fc9d3c0d106';
export let msGuid = 'a732eee2-fc84-4bfe-94da-c7c29340f82d';
export let mrGuid = '954cc5f9-7c43-4ee1-af08-f901e537dda8';

export let generalBoy = {
    id: 'cc7a7227-177a-4ab4-a693-30127a7a927f',
    desc: 'Boy'
};
export let generalTwins = {
    id: 'a0d8d8c6-2c1c-4494-b91a-c7c7c83ab3d3',
    desc: 'Twins'
}
export let generalGirl = {
    id: '016c92e8-9944-4ffa-8d06-97e9b1ff3356',
    desc: 'Girl'
}
export let generalOthers = {
    id: '20bd4980-8250-4f96-89ad-75088598720b',
    desc: 'Others'
}

export let defaultProfilePic = 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/74950205_164717777951773_8125483725693920434_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=101&oh=9f812c0eee019ada91f9f7ff0600eb2d&oe=5E812F76';

export function isEmpty (string) {
    if ( string == null || string == '' || string == '0' || string == 0 || string.length == 0) {
        return true;
    }
    return false;
}

export function isDate (date) {
    return typeof date.getDate == 'function' ? true : false
}

export const YNToBool = (str) => {
    return str == 'Yes' ? true : false;
}
export const BoolToYN = (bool) => {
    return bool ? 'Yes' : 'No'
}

export function hasNumber(myString) {
    return /\d/.test(myString);
}

export function isAlphaOrParenAndSpace(str) {
    return /^[a-zA-Z() ]+$/.test(str);
}


export let VideoCall = 'da1faa5e-cf3a-4166-ba6e-eb1809aa7270';
export let PhysicalVisit = '769e010f-4d9c-41a2-8772-d623ff8ac948';