
const matchList= (state = {user: []},action)=> {
  switch (action.type) {
    case 'GETMATCH':
      return {user:action.user.clo_list};
  }
  return state;
}
export default matchList;



