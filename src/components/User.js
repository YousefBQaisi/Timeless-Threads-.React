import {
  Menu,
  Group,
  Text,
  Avatar,
  ActionIcon,
} from '@mantine/core';
import {
  Navigate,
  json,
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  IconLogout,
  IconChevronRight,
} from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

import Profile from '../components/Profile';
export default function UserMenu({ setIsShowIcon }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    setCurrentUser(
      JSON.parse(localStorage.getItem('currentUser'))
    );
  }, []);

  return (
    <Group position="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: 'pop' }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon>
            <IconSettings size="1.5rem" stroke={2} color="#333" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Link
            to="profile"
            // onClick={() => setIsShowIcon(false)}
          >
            <Menu.Item
              rightSection={<IconChevronRight size="1.2rem" stroke={1.5} />}
              // onClick={() => navigate('/')}
            >
              <Group>
                <Avatar
                  radius="xl"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />

                {currentUser && (
                  <div>
                    <Text weight={500}>{currentUser.name}</Text>
                    <Text size="xs" color="dimmed">
                      {currentUser.email}
                    </Text>
                    <Text size="xs" color="dimmed">
                      {currentUser.address}
                    </Text>
                  </div>
                )}
              </Group>
            </Menu.Item>
          </Link>

          <Menu.Divider />

          <Menu.Label>Settings</Menu.Label>

          <Menu.Item
            icon={<IconLogout size="0.9rem" stroke={1.5} />}
            onClick={() => {
              localStorage.removeItem('currentUser')

              navigate('/login')

              setIsShowIcon(false)
            }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}
