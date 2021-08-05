<?php

namespace Webjump\Academia\Model;

use Magento\Framework\Model\AbstractModel;
use Webjump\Academia\Model\ResourceModel\Task as TaskResource;

class Task extends AbstractModel
{
    /**
     * Initialize resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init(TaskResource::class);
    }
}
