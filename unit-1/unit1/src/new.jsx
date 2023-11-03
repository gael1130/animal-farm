import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyComponent() {
    return (
        <>
            { 1 +2 +3 }
        </>
    )
}

function App() {
    return (
        <div>
            <MyComponent />
        </div>
    );
}