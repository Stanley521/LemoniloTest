
import { getData } from "./REST";

export async function getCountry() {
    let url = '/api/CTGeneral/GetByParams?type=country';
    let response = await getData(url);
    console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload;  
}

export async function getRace() {
    let url = '/api/CTGeneral/GetByParams?type=race';
    let response = await getData(url);
    console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}

export async function getLanguage() {
    let url = '/api/CTGeneral/GetByParams?type=language';
    let response = await getData(url);
    console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}

export async function getRoute() {
    let url = '/api/CTGeneral/GetByParams?type=route';
    let response = await getData(url);
    // console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}
export async function getDoseUnit() {
    let url = '/api/CTGeneral/GetByParams?type=DOSAGE_UNIT';
    let response = await getData(url);
    // console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}
export async function getFrequency() {
    let url = '/api/CTGeneral/GetByParams?type=frequency';
    let response = await getData(url);
    // console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}
export async function getInstruction() {
    let url = '/api/CTGeneral/GetByParams?type=pres_instruction';
    let response = await getData(url);
    // console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}

export async function getFeedback() {
    let url = '/api/CTGeneral/GetByParams?type=feedback';
    let response = await getData(url);
    console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}

export async function getUnit(ctUnitId) {
    let url = '/api/CTGeneral/' + ctUnitId;
    let response = await getData(url);
    console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}

export async function getSecurityQuestion() {
    let url = '/api/CTGeneral/GetByParams?type=security_question';
    let response = await getData(url);
    // console.warn('CTGeneralDeprecated please get from redux Store');
    return response.payload; 
}