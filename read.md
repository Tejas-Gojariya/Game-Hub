# State

const [name, Setname] = usestate('');

# Props

interface Props {
name: String;
}

const Component ({name} : Props => {
return <p>{name}</p>
})

# Events

<Button onclick={() => clonsole.log('click')}></button>

# components

the component that owns a piece of the state, should be the one modifying it.

# caching

The Process of the storing data in a place where it can be accessed more quickly efficiently in the fatutre.
