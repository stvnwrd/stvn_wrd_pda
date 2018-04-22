# Testing task 1:

## Carry out static testing on the code below.

### Read through code below and comment on any errors you can spot.

#### Don't correct the errors!


```ruby
class CardGame

# - is it weird that the cards and the game are in the same class?k
# - no getters/setters

  def initialize(suit, value)
    @suit = suit
# - unnecessary semi-colon, but not an error
    @value = value;
  end

# - should be snake-case
# - missing self
  def checkforAce(card)
# - == required for comparison rather than =
    if card.value = 1
      return true
    else
      return false
    end
  end


# - typo of the keyword def
# - missing self
# - comma missing from between parameters
  dif highest_card(card1 card2)
# - not an error, but indentation is too far to the left for the loop and final 'end'
  if card1.value > card2.value
# - there is no variable named card, it should be card1.
# - there is no method called name, probably best to just return entire object
    return card.name
  else
# - no condition for same card value, not sure if this is an error or a 'dealer's hand wins' situation!!!
# - not an error but implicit return is inconsistent with previous line
    card2
  end
end
# - superfluous end statement
end

# - is self wrong here?
def self.cards_total(cards)
# - total is not assigned a value
  total
  for card in cards
    total += card.value
# - return is within the loop, so it will return during first iteration and then exit loop
# - pedantic maybe, but should be a space after 'of'
# - need to convert the integer of total to a string
    return "You have a total of" + total
  end
end

# the class CardGame is missing an end statement

```
