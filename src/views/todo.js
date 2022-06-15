import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';



export default function Todo() {
    const [data, setData] = useState("")
    const [editText, seteditText] = useState(false)
    const [currentindex, setCurrentIndex] = useState()
    const [newData, setNewData] = useState()
    // https://mongodb-app1.herokuapp.com/user/add

    useEffect(() => {
        fetchData()

    }, [])

    const fetchData = () => {
        const user = fetch('http://localhost:5000/user/all')
            .then(res => res.json())
            .then(res => setNewData(res)

            )
    }



    const postData = async () => {
        try {
            const response = await fetch('http://localhost:5000/user/add',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({ data })
                }
            )


            const userData = await response.json()
            setData('')
            fetchData()
        }
        catch (error) {
            console.log(error.message)
        }
    }
    // https://mongodb-app1.herokuapp.com/user/add
    const deleteItem = async (_id) => {
        const response = await fetch(`http://localhost:5000/user/delete/${_id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        fetchData()
    }

    const editItem = (_id) => {
        var templist = [...newData]
        const user = templist.find(d => d._id == _id)
        setData(user.name)
        setCurrentIndex(user._id)
        seteditText(true)
    }
    const updateTodo = async () => {
        const response = await fetch(`http://localhost:5000/user/update/${currentindex}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ data })
            })
        seteditText(false)
        setData('')
        fetchData()
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            flexDirection: 'column',
        }}>
            <div style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant='h2' p={3} >
                    Todo App
                </Typography>
                <Stack direction='row' spacing={3} >

                    <TextField id="outlined-basic"
                        value={data}
                        onChange={(e) => { setData(e.target.value) }}
                        variant="outlined" placeholder='Enter any text'
                        focused fullWidth
                    />
                    {editText ? <Button variant="contained"
                        onClick={updateTodo}>
                        Update  </Button> :
                        <Button variant="contained"
                            onClick={postData}
                        >Add  </Button>
                    }

                </Stack>

            </div>

            <div style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 20 }}>
                {newData?.map((item, index) => {

                    return (

                        <Stack direction='row' alignItems="center" mt={2} key={index}  >
                            <Typography variant="h6"
                                gutterBottom
                                component="div"
                                sx={{ width: '80%' }}   >
                                {item.name}

                            </Typography>
                            <Button sx={{ width: '10%' }}
                                size="small"
                                variant="outlined"
                                onClick={() => editItem(item._id)} >
                                Edit  </Button>
                            <IconButton onClick={() => { deleteItem(item._id) }}
                                sx={{ width: '10%' }}
                                aria-label="delete"
                                size="large">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    )
                }


                )}
            </div>
        </div>
    )
}