import React, { Component } from "react";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  withMobileDialog
} from "material-ui/Dialog";
import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";
import TextField from "material-ui/TextField";

class ReadablesCreatePostDialog extends Component {
  state = {
    open: false,
    tag: "react"
  };

  handleChange = name => event => {
    this.setState({ tag: event.target.value });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.dialogOpen });
  }

  render() {
    const { fullScreen } = this.props;

    return (
      <Dialog
        fullScreen={fullScreen}
        open={this.state.open}
        onRequestClose={this.handleRequestClose}
      >
        <DialogTitle>{"Submit to Readables"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are submitting a post. The key to a successful submission is
            interesting content and a descriptive title.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="title"
            fullWidth
          />
        </DialogContent>

        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Body"
            type="title"
            multiline
            fullWidth
          />
        </DialogContent>

        <DialogContent>
          <FormControl>
            <InputLabel htmlFor="tag-helper">Tag</InputLabel>
            <Select
              value={this.state.tag}
              onChange={this.handleChange("tag")}
              input={<Input id="tag-helper" />}
            >
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="udacity">Udacity</MenuItem>
              <MenuItem value="redux">Redux</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button raised onClick={this.handlePostCreate}>
            Submit
          </Button>
          <Button onClick={this.handleRequestClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withMobileDialog()(ReadablesCreatePostDialog);
