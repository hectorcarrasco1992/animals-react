import React from 'react'


const searchIt = (term) => (item) => item.type.toLowerCase().includes(term.toLowerCase());

export default searchIt