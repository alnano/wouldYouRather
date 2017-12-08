//users
{
  users:{
    isAuthed:
      isfetching,
      error,
      authId,
        [uid]:
          info: {
            name,
            avatar,
            uid,
          }
  }
  //decisions
    decisions:{
      [decisionsId]:{
        question,
          date,
          votes
        agree,
          disagree,
          [uid]
        info,
          answerd,
      }
    }
  // feed
    [feed]: {
      isfetching,
      error,
      newDecisionsAvailable,
     
    }
// modal
    modal:{
      isOpen
    }


}