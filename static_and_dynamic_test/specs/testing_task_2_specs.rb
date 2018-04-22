require 'minitest/autorun'
require_relative '../testing_task_2'


class TestCardGame < Minitest::Test

  def setup
    @card1 = CardGame.new('Clubs', 10)
    @card2 = CardGame.new('Hearts', 1)
    @card3 = CardGame.new('Spades', 8)
    @card4 = CardGame.new('Diamonds', 6)
    @card5 = CardGame.new('Diamonds', 10)
  end

  def test_get_suit
    result = @card1.suit
    assert_equal('Clubs', result)
  end

  def test_get_value
    assert_equal(10, @card1.value)
  end

  def test_check_for_ace__false
    assert_equal(false, CardGame.check_for_ace(@card1))
  end

  def test_check_for_ace__true
    assert_equal(true, CardGame.check_for_ace(@card2))
  end

  def test_highest_card__card1_highest
    result = CardGame.highest_card(@card1, @card2)
    assert_equal(@card1, result)
  end

  def test_highest_card__card2_highest
    result = CardGame.highest_card(@card2, @card3)
    assert_equal(@card3, result)
  end

  def test_highest_card__cards_equal
    result = CardGame.highest_card(@card1, @card5)
    assert_equal("Draw", result)
  end

  def test_cards_total
    array = [@card1, @card2, @card3]
    result = CardGame.cards_total(array)
    assert_equal("You have a total of 19", result)
  end

end
