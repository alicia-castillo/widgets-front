import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom';
import { useForm } from "../../hooks/useForm"
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const WidgetEdit = ({ onEditWidget }) => {

    const params = useParams();

    const { name } = JSON.parse(params.widget);

    const navigate = useNavigate();

    const { description, price, onInputChange, onResetForm } = useForm({
        description: '',
        price: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.legth < 5 || description.length > 1000 || parseFloat(price).toFixed(2) < 1 || parseFloat(price).toFixed(2) > 20000) {
            alert("Description must be between 5 and 1000 characterers and price must be from 1 to 20,000. Check your data.")
            return;
        }

        const editWidget = {
            name: name,
            description: description,
            price: price
        }

        onEditWidget(editWidget, name);

        onResetForm();
    }

    return (
        <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h3">
                Edit widget: {name}
            </Typography>
            <hr />

            <form onSubmit={onFormSubmit}>

                <label>Description</label>
                <TextField
                    label="Widget's description"
                    type='text'
                    name='description'
                    value={description}
                    onChange={onInputChange}
                    inputProps={{ minLength: 5, maxLength: 1000 }}
                    fullWidth
                    required
                    margin='normal'
                />
                <label>Price</label>
                <TextField
                    label="Widget's price"
                    type='number'
                    name='price'
                    step=".01"
                    value={price}
                    onChange={onInputChange}
                    fullWidth
                    required
                    margin='normal'
                />


                <Button
                    type="submit"
                    variant="outlined"
                    color="success"
                    fullWidth
                >

                    Edit
                </Button>
            </form>
            <Button variant="outlined" color="secondary" onClick={() => navigate("/")}>
                Back to widgets
            </Button>

        </Stack>
    )
}

export default WidgetEdit;

