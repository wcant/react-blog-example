import React from 'react'
import BlogEntry from './BlogEntry'
import data from '../data.js'

export default function Blog() {
    const blogs = data.map((blog, index) => {
        return <BlogEntry
            key={index}
            {...blog}
        />
    })
    
    return (
        <main>
            {blogs}
        </main>
    )
}