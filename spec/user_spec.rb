describe User do
  context "when new" do
    it { should be_empty }
    it { should have(0).items }
  end
end