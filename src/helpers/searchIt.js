const searchIt = (term) => {
    return item => {
      return item.subject.toLowerCase().includes(term.toLowerCase())
    }
  }

export default searchIt
