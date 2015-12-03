class QualityChanger
  def self.go(params, old_quality)
    options = {"promote" => lambda {promote(old_quality)},
               "demote" => lambda {demote(old_quality)}}
    options.default_proc =  proc { |h,k| return old_quality }
    options[params["qualityChange"]].call
  end

  def self.demote(old_quality)
    options = {"thousand" => "thousand",
               "million" => "thousand",
               "billion" => "million"}
    options[old_quality]
  end

  def self.promote(old_quality)
    options = {"thousand" => "million",
               "million" => "billion",
               "billion" => "billion"}
    options[old_quality]
  end
    
end
