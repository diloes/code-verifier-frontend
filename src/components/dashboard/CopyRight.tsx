import { Typography, Link } from '@mui/material'


const CopyRight = (props: any) => {
  return (
    <Typography 
      variant='body2' 
      color='text.secondary' 
      align='center' 
      { ...props }
    >
      { 'CopyRight ©' }
      <Link color='inherit' href='https://github.com/diloes'>
        Diego's Repo
      </Link>
      { new Date().getFullYear() }
    </Typography>
  )
}

export default CopyRight