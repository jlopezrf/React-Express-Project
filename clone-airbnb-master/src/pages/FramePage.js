import React from 'react'
import {Topbar} from './../components/Topbar'

export const FramePage = ({ children }) => (
    <>
        <Topbar />
        <section className="page">
            { children }
        </section>
    </>
);