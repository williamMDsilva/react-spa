import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";

export default function CheckListLessons({ lessons, courseId }) {
  
  const history = useHistory();

  return (
    <div>
    <List dense={true}>
      {lessons.map((item) => React.cloneElement(<ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={item.description}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => {
              history.push(`${courseId}/lessons/${item.id}?title=${item.title}&description=${item.description}&link=${item.link}&thumbnail=${item.thumbnail}`)
            }}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>, {
          ...item,
          key: item.id,
        })
      )}
    </List>
    </div>
  );
}
