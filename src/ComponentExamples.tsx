import { useState } from "react"
import {
  Alert,
  Autocomplete,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Tooltip
} from "@mui/material"

const ComponentExamples = () => {

  const occupationList = [
    {
      value: 'Frontend Engineer',
      label: 'Frontend Engineer',
    },
    {
      value: 'Backend Engineer',
      label: 'Backend Engineer',
    },
    {
      value: 'Fullstack Engineer',
      label: 'Fullstack Engineer',
    },
    {
      value: 'Technical Writer',
      label: 'Technical Writer'
    },
    {
      value: 'Developer Advocate',
      label: 'Developer Advocate'
    },
    {
      value: 'UI/UX Designer',
      label: 'UI/UX Designer'
    },
    {
      value: 'QA Engineer',
      label: 'QA Engineer'
    }
  ]
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Container maxWidth="sm" style={{ margin: '1rem auto'}}>
      <h1>Material UI component examples</h1>
      <form>
        <Alert severity="info">This is a Material UI info Alert.</Alert>
        <TextField label="Full name" placeholder="Insert your full name" fullWidth margin="normal"/>
        <TextField label="Email" type="email" placeholder="Insert your email" fullWidth margin="normal"/>
        <FormControl margin="normal">
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
          row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Autocomplete options={occupationList} renderInput={(params) => <TextField {...params} label="Occupation" />}/>
        <TextField label="Bio" placeholder="Describe yourself" multiline minRows={2} fullWidth margin="normal"/>
        <FormControlLabel control={<Switch defaultChecked />} label='This is switch component' />      
        <FormControlLabel control={<Checkbox defaultChecked />} label='This is checkbox component' />
        <br/>
        <Tooltip title="This is a Material UI tooltip"><span>Hover me to show tooltip</span></Tooltip>
        <div style={{ display: 'flex', gap: '1rem', justifyContent:'flex-end', marginTop: '1rem' }}>
        <Button variant="outlined" type="reset">Reset</Button>
        <Button variant="contained" onClick={() => setIsDialogOpen(true)}>Save (Open Modal)</Button>
        </div>
      </form>

      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Lorem ipsum dolor sit amet
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et massa at orci ultrices facilisis. Donec id viverra ante, a mollis odio. Morbi nec vulputate urna, sit amet pulvinar tortor.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Disagree</Button>
          <Button onClick={() => setIsDialogOpen(false)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default ComponentExamples