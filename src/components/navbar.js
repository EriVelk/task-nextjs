import {Menu, Container, Button, MenuItem, MenuMenu} from 'semantic-ui-react'
import {useRouter} from 'next/router';
import Link from 'next/link';

export const Navbar = () =>{
    
    const router = useRouter();

    return(
        <Menu inverted borderless attached>
            <Container>
                <MenuItem>
                    <Link href="/">
                        <img src='/favicon.ico'/>
                    </Link>
                </MenuItem>
                <MenuMenu position='right'>
                    <MenuItem>
                        <Button primary size='mini' onClick={() => router.push('/tasks/new')}>
                            New Task
                        </Button>
                    </MenuItem>
                </MenuMenu>
            </Container>
        </Menu>
    )
}