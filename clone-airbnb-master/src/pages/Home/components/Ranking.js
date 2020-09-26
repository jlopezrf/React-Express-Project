import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { requestHttp } from '../../../config/HttpRequest';

export const Ranking = () => {

    const [experiencesTop5, setExperiencesTop5] = useState([]);

    useEffect( () => {
        getTop5()
    }, []);

    const getTop5 = async () => {
        try {
            const response = await requestHttp('get', '/experiences/top5');
            setExperiencesTop5(response.top5)
        } catch (error) {
            console.error(error);
        }
    };

    return(<section className="ranking">
            {
                experiencesTop5.map(el => <Card key={el.id} {...el} /> )
            }
        </section>
    )
};