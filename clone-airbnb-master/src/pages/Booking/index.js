import React, {useState, useEffect} from 'react'
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';
import {useParams} from 'react-router-dom'
import { requestHttp } from '../../config/HttpRequest';

export const BookingPage = () => {

    const {id} = useParams()
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [isValidForm, setIsValidForm] = useState(false);

    const bookingHandler = (e) => {
        e.preventDefault();
        requestBooking();
    }

    const requestBooking = async () => {
        const body = {
            id,
            name,
            phone,
            email,
            bookingDate
        };
        var response;
        try {
            await requestHttp('post', '/booking/makebooking', body);
            window.alert('Bokking Succes');
        } catch (error) {
            window.alert('it was not possible to make the reservation')
        }
       
    }

    useEffect(() => {
        setIsValidForm(name !== '' && phone !== '' && email !== '' && bookingDate !== '');
    }, [name, phone, email, bookingDate])

    return(
        <FramePage>
            <form onSubmit={bookingHandler} className="booking-form">
                <div>
                    <label>Nombre: </label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Teléfono: </label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="tel"/>
                </div>
                <div>
                    <label>Correo: </label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                </div>
                <div>
                    <label>Fecha de reserva: </label>
                    <input value={bookingDate} onChange={e => setBookingDate(e.target.value)} type="date"/>
                </div>
                <Button disabled={!isValidForm} type="submit" label="Reservar" />
            </form>
        </FramePage>
    )
};