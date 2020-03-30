import { h, app } from 'hyperapp'
import { interval } from '@hyperapp/time'


// INITIAL STATE

const emojis = [
  '👹',
  '😱',
  '👾',
  '🤧',
  '🙈',
  '👨🏽‍🦳',
  '🥵',
]

const init = {
  emoji: emojis[0],
}


// HELPERS

const sample = (array) => (
  array[Math.floor(Math.random() * array.length)]
)


// ACTIONS

const ChangeRandomEmoji = (state) => ({
  ...state,
  emoji: sample(emojis),
})


// SUBSCRIPTIONS

const intervalSubscription = (dispatch, options) => {
  const interval = setInterval(() => dispatch(options.action), options.time)

  return () => clearInterval(interval)
}

const subscriptions = (_state) => ([
  [
    intervalSubscription,
    {
      time: 250,
      action: ChangeRandomEmoji,
    }
  ]
])


// VIEW

const view = (state) => (
  h('main', {}, [
    h('div', { class: 'random-emoji' }, state.emoji),
    h('h1', {}, 'c0v1d'),
    h('div', { class: 'coming-soon' }, 'Coming Soon...'),
  ])
)


// APP

app({
  init,
  view,
  subscriptions,
  node: document.getElementById('game'),
})
