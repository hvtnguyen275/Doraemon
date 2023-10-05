/* eslint-disable jsx-a11y/alt-text */
'use client';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import styles from '../Styles/Header.css';
import { useNavigate } from 'react-router-dom';
import doraemonIcon from '../../../public/doraemon-icon.png';
import Image from 'next/image';

function Header({ typo }: { typo?: string }) {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Container className={styles.buttonDoraemon}>
            {typo ? (
              <Button onClick={navigateHome}>
                <Image width={50} height={50} src={doraemonIcon} alt={''} />
                <h3 className="typo">{typo}</h3>
              </Button>
            ) : (
              <IconButton onClick={navigateHome}>
                <Image width={50} height={50} src={doraemonIcon} alt={''} />
              </IconButton>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
