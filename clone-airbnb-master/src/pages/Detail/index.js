import React, { useEffect, useState } from 'react'
import { Title } from '../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';
import { useParams } from 'react-router-dom'
import { requestHttp } from '../../config/HttpRequest';

const buttonStyle = {
    backgroundColor: '#FC642D',
    borderColor: '#fe530c'
};

export const DetailPage = () => {

    const [experience, setExperience] = useState({});

    const { id } = useParams();

    useEffect( () => {
        getDetail();
    }, {}); 

    const getDetail = async () => {
        try {
            const response = await requestHttp('get', `/experiences/detail/${id}`);
            setExperience(response.experience);
            console.log(response.experience);
        } catch (error) {
            console.error(error);
        }
    };


    return (<FramePage>
              <Title label={experience.title}></Title>
              <CardDetail image={experience.image} description={experience.description}></CardDetail>
              <Button isLink={true} linkTo={`/booking/${id}`} label="¡Reserva ahora!" style={buttonStyle}></Button>
            </FramePage>
    );
};