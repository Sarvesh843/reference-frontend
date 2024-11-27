import PropTypes from 'prop-types';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import { UseMockedUser } from 'src/hooks/use-mocked-user';

import uuidv4 from 'src/utils/uuidv4';

import { _mock } from 'src/_mock';
// ----------------------------------------------------------------------

export default function KanbanTaskAdd({ status, onAddTask, onCloseAddTask }) {

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { userName, email,userId } = await UseMockedUser();
        setUserData({ userName, email ,userId});
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);


  const [name, setName] = useState('');

  const defaultTask = useMemo(
    () => ({
      id: uuidv4(),
      status,
      name: name.trim(),
      priority: 'medium',
      attachments: [],
      labels: [],
      comments: [],
      assignee: [],
      due: [null, null],
      reporterId: userData?.userId,
      reporter: {
        id: userData?.userRoleId,
        name: userData?.userName,
        avatarUrl: _mock.image.avatar(16),
      },
    }),
    [name, status, userData?.userId, userData?.userName, userData?.userRoleId]
  );

  const handleKeyUpAddTask = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (name) {
          onAddTask(defaultTask);
        }
      }
    },
    [defaultTask, name, onAddTask]
  );

  const handleClickAddTask = useCallback(() => {
    if (name) {
      onAddTask(defaultTask);
    } else {
      onCloseAddTask();
    }
  }, [defaultTask, name, onAddTask, onCloseAddTask]);

  const handleChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAddTask}>
      <Paper
        sx={{
          borderRadius: 1.5,
          bgcolor: 'background.default',
          boxShadow: (theme) => theme.customShadows.z1,
        }}
      >
        <InputBase
          autoFocus
          multiline
          fullWidth
          placeholder="Task name"
          value={name}
          onChange={handleChangeName}
          onKeyUp={handleKeyUpAddTask}
          sx={{
            px: 2,
            height: 56,
            [`& .${inputBaseClasses.input}`]: {
              typography: 'subtitle2',
            },
          }}
        />
      </Paper>
    </ClickAwayListener>
  );
}

KanbanTaskAdd.propTypes = {
  onAddTask: PropTypes.func,
  onCloseAddTask: PropTypes.func,
  status: PropTypes.string,
};
