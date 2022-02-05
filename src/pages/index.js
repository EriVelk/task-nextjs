import {Button, Card, CardContent, CardHeader, Container, Grid, GridColumn, GridRow} from 'semantic-ui-react';

export default function HomePage({tasks}) {
  
  if(tasks.length == 0) return(
    <Grid centered verticalAlign='middle' columns='1' style={{height: "80vh"}}>
      <GridRow>
        <GridColumn verticalAlign='center'>
          <h1>There are not tasks yet</h1>
          <img src='https://icons.veryicon.com/png/o/miscellaneous/practical-life-icon/empty-24.png' alt='No tasks yet'/>
          <div>
            <Button primary>
              Create a Task
            </Button>
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
  )

  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {
          tasks.map(task => (
            <Card key={task._id}>
              <CardContent>
                <CardHeader>
                  {task.title}
                </CardHeader>
                <p>
                  {task.description}
                </p>
              </CardContent>
              <CardContent extra>
                <Button primary info="true">View</Button>
                <Button secondary info="true">Edit</Button>
              </CardContent>
            </Card>
          ))
        }
      </Card.Group>
    </Container>
  );
}

export const getServerSideProps = async (ctx) => {

  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json();

  return{
    props: {
      tasks
    }
  }
}