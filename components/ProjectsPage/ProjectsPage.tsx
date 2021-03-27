import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

const projects = [
    {
        imagePath: "/images/projects/anirec.PNG",
        title: "AniRec | Anime Recommender API",
        description: "A website that recommends you anime based on a few questions. There is also an API available to incorporate this into your own apps.",
        link: "https://ani-rec.herokuapp.com/",
        github: "https://github.com/khxia/AniRec",
        tags: "ReactJS, ExpressJS, MongoDB, API, Material UI, JavaScript"
    },
    {
        imagePath: "/images/projects/hack.PNG",
        title: "UCLA ACM Hack Website",
        description: "The official website for UCLA ACM's Hack committee.",
        link: "https://hack.uclaacm.com",
        github: "https://github.com/uclaacm/hack.uclaacm.com",
        tags: "ReactJS, Gatsby, Material UI, GraphQL, JavaScript"
    },
    {
        imagePath: "/images/projects/blog.PNG",
        title: "Just Another View",
        description: "My personal blog where I write about various different things.",
        link: "https://khxia.github.io",
        github: "https://github.com/khxia/khxia.github.io/tree/dev2",
        tags: "ReactJS, Theme UI, Gatsby, GraphQL, JavaScript"
    },
    {
        imagePath: "/images/projects/portfolio.PNG",
        title: "Personal Website",
        description: "This website!",
        link: "/",
        github: "https://github.com/khxia/personal-website",
        tags: "ReactJS, NextJS, TypeScript, Material UI"
    }
];

const useStyles = makeStyles({
    root: {
        marginTop: `10px`,
        marginBottom: `40px`
    },
    media: {
      height: 300,
    },
    actions: {
        display: `flex`,
        flexDirection: `row`,
        alignItems: `baseline`,
        justifyContent: `space-between`,
    },
    subTitle: {
        paddingBottom: `30px`,
        paddingTop: `15px`
    },
    links: {
        textDecoration: `none`
    }
  });

const ProjectCard = ({ image, title, description, link, github, tags }: {
    image: any, title: string, description: string, link: string, github: string, tags: string
}) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
          <div>
            <Typography variant="subtitle2" color="textSecondary" component="p">
                {tags}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => { window.open(github) }} size="small" aria-label="delete">
              <GitHubIcon />
            </IconButton>
            <IconButton onClick={() => { window.open(link) }} size="small" aria-label="delete">
              <LinkIcon />
            </IconButton>
          </div>
      </CardActions>
    </Card>
    );
}

const ProjectsPage = () => {
    const classes = useStyles();
    const projectcards = projects.map( (project, key) => 
        <ProjectCard 
            image={project.imagePath}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
            tags={project.tags}
            />
    )
    const project = projects[0];
    return(
        <div>
            <Typography className={classes.subTitle} variant="subtitle1" color="textPrimary" component="h3" >
             Here are some of my projects. Have a look! 😎
            </Typography>
            <div>
            {projectcards}
            </div>
        </div>
    );
}

export default ProjectsPage