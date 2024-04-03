import { useForm } from "../../hooks/useForm"
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const WidgetAdd = ({ onNewWidget }) => {
    const navigate = useNavigate();

    const { description, name, price, onInputChange, onResetForm } = useForm({
        name: '',
        description: '',
        price: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (name.length < 3 || name.length > 100 || description.legth < 5 || description.length > 1000 || parseFloat(price).toFixed(2) < 1 || parseFloat(price).toFixed(2) > 20000){
            alert("Icorrect data. Name must be between 3 to 100 characteres, description must be bewteen 5 and 1000 characterers and price over 1 to 20,000. Check your data");
            return;
        } 

        const newWidget = {
            name: name,
            description: description,
            price: price
        }

        onNewWidget(newWidget);

        onResetForm();
    }

    return (
        <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h3">
                Add widget:
            </Typography>
            <hr />
            <form onSubmit={onFormSubmit}>
                <TextField
                    label="Widget's name"
                    type='text'
                    name='name'
                    value={name}
                    onChange={onInputChange}
                    inputProps={{ minLength: 3, maxLength: 100 }}
                    fullWidth
                    required
                    margin="normal"
                />
                <br />
                <TextField
                    label="Widget's description"
                    type='text'
                    name='description'
                    value={description}
                    onChange={onInputChange}
                    inputProps={{ minLength: 5, maxLength: 1000 }}
                    required
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Widget's price"
                    type='number'
                    name='price'
                    step=".01"
                    value={price}
                    onChange={onInputChange}
                    required
                    fullWidth
                    margin="normal"
                />


                <Button
                    type="submit"
                    variant="outlined"
                    color="success"
                    fullWidth
                >

                    Add
                </Button>
            </form>
            <Button variant="outlined" color="secondary" onClick={() => navigate("/")}>
                Back to widgets
            </Button>
        </Stack>
    )
}

export default WidgetAdd;

